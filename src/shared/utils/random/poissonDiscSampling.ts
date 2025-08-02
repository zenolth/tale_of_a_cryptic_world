import { MathUtils } from "../mathUtils";

const EPSILON = 0.001;

export default class PoissonDiscSampler {
    private random: Random;

    private radiusSquared: number;

    private cellSize: number;
    private gridSizeX: number;
    private gridSizeY: number;
    private grid: (number | undefined)[][] = new Array();
    private points: Array<Vector2> = new Array();
    private spawnPoints: Array<Vector2> = new Array();

    constructor(private seed: number,private radius: number,private area: Vector2,private samplesCountBeforeRejection = 30) {
        this.random = new Random(seed);
        this.radiusSquared = this.radius * this.radius;
        this.cellSize = this.radius / MathUtils.sqrtOf2;
        this.gridSizeX = math.ceil(area.X / this.cellSize);
        this.gridSizeY = math.ceil(area.Y / this.cellSize);

        for (let i = 0; i < this.gridSizeX; i++) {
            this.grid[i] = [];
            for (let j = 0; j < this.gridSizeY; j++) {
                this.grid[i][j] = undefined;
            }
        }

        this.spawnPoints.push(new Vector2(this.area.X / 2,this.area.Y / 2));
    }

    generateNextPoint() {
        while (!this.spawnPoints.isEmpty()) {
            const spawnIndex = this.random.NextInteger(0,this.spawnPoints.size() - 1);
            const spawnCenter = this.spawnPoints[spawnIndex];
            let candidateAccepted = false;

            for (let j = 0; j <= this.samplesCountBeforeRejection - 1; j++) {
                const angle = 2 * math.pi * (this.random.NextNumber(0,1) + j / this.samplesCountBeforeRejection);
                const r = this.radius + EPSILON;
                const x = spawnCenter.X + r * math.cos(angle);
                const y = spawnCenter.Y + r * math.sin(angle);

                if (this.isValid(new Vector2(x,y))) {
                    this.points.push(new Vector2(x,y));
                    this.spawnPoints.push(new Vector2(x,y));
                    const cellX = math.floor(x / this.cellSize);
                    const cellY = math.floor(y / this.cellSize);
                    this.grid[cellX][cellY] = this.points.size() - 1;
                    candidateAccepted = true;
                    return new Vector2(x,y);
                }
            }

            if (!candidateAccepted) {
                this.spawnPoints.remove(spawnIndex);
            }
        }

        return undefined;
    }

    isValid(candidate: Vector2) {
        if (candidate.X >= 0 && candidate.X < this.area.X && candidate.Y >= 0 && candidate.Y < this.area.Y) {
            const cellX = math.floor(candidate.X / this.cellSize);
            const cellY = math.floor(candidate.Y / this.cellSize);

            const searchStartX = math.max(0, cellX - 1);
            const searchEndX = math.min(this.gridSizeX - 1, cellX + 1);
            const searchStartY = math.max(0, cellY - 1);
            const searchEndY = math.min(this.gridSizeY - 1, cellY + 1);

            for (let x = searchStartX; x <= searchEndX; x++) {
                for (let y = searchStartY; y <= searchEndY; y++) {
                    const pointIndex = this.grid[x][y];

                    if (pointIndex) {
                        const existingPoint = this.points[pointIndex];
                        const dir = candidate.sub(existingPoint);
                        const distSquared = dir.Dot(dir);

                        if (distSquared < this.radiusSquared) {
                            return false;
                        }
                    }
                }
            }

            return true;
        }
        return false;
    }

    public static generatePoints(seed: number,radius: number,area: Vector2,samplesCountBeforeRejection = 30) {
        const sampler = new PoissonDiscSampler(seed,radius,area,samplesCountBeforeRejection);
        const generatedPoints: Array<Vector2> = new Array();

        while (true) {
            const nextPoint = sampler.generateNextPoint();
            if (!nextPoint) break;
            generatedPoints.push(nextPoint);
        }

        return generatedPoints;
    }
}
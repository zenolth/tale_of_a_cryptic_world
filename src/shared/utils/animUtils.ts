//!native
//!optimize 2

export function loadAnimation(animator: Animator,id: string) {
    const animation = new Instance("Animation");
    animation.AnimationId = id;
    const track = animator.LoadAnimation(animation);
    animation.Destroy();
    return track;
}
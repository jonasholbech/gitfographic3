const guards = {
  hasUnlocked: (context, event, { cond }) => {
    return context.unlocks[cond.scene];
  },
  greaterThanZero: (ctx, evt, { cond }) => {
    console.log(ctx[cond.prop]);
    return ctx[cond.prop] > 0;
  },
  hasMoreTexts: (ctx, evt) => {
    return ctx.workingAloneCount < 9;
  },
};

export default guards;

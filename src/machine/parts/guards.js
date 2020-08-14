const guards = {
  hasUnlocked: (context, event, { cond }) => {
    return context.unlocks[cond.scene];
  },
};

export default guards;

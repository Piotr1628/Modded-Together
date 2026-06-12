ServerEvents.recipes((event) => {
  // energy_acceptor
  event.shaped('ae2:energy_acceptor', ['AAA', 'ABA', 'AAA'], {
    A: 'create:sturdy_sheet',
    B: 'createaddition:alternator',
  });
});

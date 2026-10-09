// formatPrice(2500000) -> 'Rp 2.500.000'
export function formatPrice(number) {
  return 'Rp ' + String(number).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}

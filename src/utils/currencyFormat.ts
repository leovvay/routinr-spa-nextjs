const formatter = new Intl.NumberFormat('en-EN', {
  style: 'currency',
  currency: 'USD',
});

export default function currencyFormat(value: number): string {
  return formatter.format(value);
}

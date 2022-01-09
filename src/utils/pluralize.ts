const pluralRules = new Intl.PluralRules();

export default function pluralize(count: number, singular: string): string {
  const grammaticalNumber = pluralRules.select(count);

  if (grammaticalNumber === 'one') return `${count} ${singular}`;
  const plural = `${singular}s`;
  return `${count} ${plural}`;
}

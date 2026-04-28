import messages from "@/messages/en.json";

type Messages = typeof messages;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type NestedValue = any;

function getNestedValue(obj: Record<string, NestedValue>, path: string): NestedValue {
  return path.split(".").reduce<NestedValue>((acc, key) => {
    if (acc && typeof acc === "object" && !Array.isArray(acc)) {
      return (acc as Record<string, NestedValue>)[key];
    }
    return undefined as unknown as NestedValue;
  }, obj as Record<string, NestedValue>);
}

type TranslationFunction = {
  (key: string): string;
  raw: (key: string) => NestedValue;
};

export function useTranslations(namespace: string): TranslationFunction {
  const section = (messages as Record<string, NestedValue>)[namespace] as Record<string, NestedValue> ?? {};

  const t = ((key: string) => {
    const value = getNestedValue(section, key);
    return typeof value === "string" ? value : String(value ?? key);
  }) as TranslationFunction;

  t.raw = (key: string) => getNestedValue(section, key);

  return t;
}

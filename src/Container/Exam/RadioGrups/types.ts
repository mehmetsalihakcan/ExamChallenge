export type Item = {
  id: number;
  key: string;
  name: string;
  boldWord: string;
  selected: boolean;
};

export type RadioGroupProps = {
  items: Item[];
  selected?: Item;
  onSelected(item: Item): void;
};

export type RadioButtonProps = {
  item: Item;
  selected?: Item;
  onSelected(item: Item): void;
};

interface Modal<T> {
  custom_id: string;
  title: string;
  components: Array<T>;
}

interface ModalComponents {
  custom_id: string;
  components: Array<TextInputStructure>;
}

type TextInputStructure = {
  type?: number;
  custom_id: string;
  label: string;
  style?: number;
  min_length?: number;
  max_length?: number;
  required?: boolean;
  value?: string;
  placeholder?: string;
};

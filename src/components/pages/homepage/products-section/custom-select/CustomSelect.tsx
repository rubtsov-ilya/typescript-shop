import Select from "react-select";
import './CustomSelec.sass'
import { FC } from "react";
import { ISelectOptions } from "../../../../../interfaces/SelectOptions.interface";
import { SingleValue } from 'react-select';

interface CustomSelectProps {
  handleChangeSelect: (value: SingleValue<ISelectOptions>) => void
}

const CustomSelect: FC<CustomSelectProps> = ({handleChangeSelect}) => {
  const selectOptions: ISelectOptions[] = [
    { value: 'title', label: 'Nome' },
    { value: 'title-reverce', label: 'Nome reverso' },
    { value: 'price', label: 'Preço' },
    { value: 'price-reverce', label: 'Preço reverso' },
  ];

  return (
    <Select
      onChange={handleChangeSelect}
      isSearchable={false}
      className="custom-select"
      classNamePrefix="custom-select"
      defaultValue={selectOptions[0]}
      name="color"
      options={selectOptions}
    />
  );
};

export default CustomSelect;

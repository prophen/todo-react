import React, { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { ITextField } from './interfaces/ITextField';
import PropTypes from 'prop-types';

export const TaskDescriptionField: FC<ITextField> = (props): ReactElement => {
  const textInput = React.useRef<HTMLTextAreaElement>(null);
  const {
    onChange = (e) => console.log(e),
    disabled = false,
    inputRef = textInput,
  } = props;

  return (
    <TextField
      id="description"
      name="description"
      label="Description"
      placeholder="Description"
      variant="outlined"
      size="small"
      multiline
      rows={4}
      fullWidth
      onChange={onChange}
      disabled={disabled}
      inputRef={inputRef}
    />
  );
};

TaskDescriptionField.propTypes = {
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};

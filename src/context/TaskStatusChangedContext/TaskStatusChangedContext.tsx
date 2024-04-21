import React, {
  FC,
  PropsWithChildren,
  ReactElement,
  createContext,
} from 'react';

export const TaskStatusChangedContext = createContext({
  updated: false,
  toggle: () => {},
});

export const TaskStatusChangedContextProvider: FC<PropsWithChildren> = (
  props,
): ReactElement => {
  const [updated, setUpdated] = React.useState(false);

  function toggleHandler() {
    setUpdated(!updated);
  }

  return (
    <TaskStatusChangedContext.Provider
      value={{ updated, toggle: toggleHandler }}
    >
      {props.children}
    </TaskStatusChangedContext.Provider>
  );
};

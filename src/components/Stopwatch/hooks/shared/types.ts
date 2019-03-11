export interface State {
  lapse: number;
  running: boolean;
}

export interface DataObject {
  state: State;
  handlers: {
    run(): void;
    clear(): void;
  };
}

export enum ActionType {
  Clear = 'CLEAR',
  Update = 'UPDATE',
}

export interface Action {
  type: ActionType;
  payload?: Partial<State>;
}
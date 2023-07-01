export interface BaseActionStatus {
  isRequesting: boolean;
}

export interface ActionStatus extends BaseActionStatus {
  error: string;
}

export interface ActionStatusWithMessage extends ActionStatus {
  message: string;
}

export interface Action {
  type: any;
}

export interface AnyAction extends Action {
  [extraProps: string]: any;
}

export interface WithData<T> extends Action {
  data: T;
}
export interface WithError<T> extends Action {
  error: T;
}
export const requestAction = <T>(type: T): Action => ({
  type
});

export const withDataAction = <T, K>(type: T, data: K): WithData<K> => ({
  type,
  data
});

export const withErrorAction = <T, K>(type: T, error: K): WithError<K> => ({
  type,
  error
});

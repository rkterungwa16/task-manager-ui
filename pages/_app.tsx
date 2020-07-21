import { Provider } from "../src/components/Provider/Provider";

interface TaskManagerProps {
  Component?: React.FC;
}

const TaskManagerApp = (props: TaskManagerProps) => {
  return (
    <Provider>
      <props.Component />
    </Provider>
  );
};
export default TaskManagerApp;

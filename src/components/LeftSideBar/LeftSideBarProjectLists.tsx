import { ProjectList } from "../Project";

const projects = [
  {
    name: "Tiv Language Studies"
  },
  {
    name: "Tiv Language Studies and all things"
  }
];
const LeftSideBarProjectLists = () => (
  <>
    <div>
      <ProjectList projects={projects} />
    </div>
    <style jsx>
      {`
        {
          width: 100%;
        }
      `}
    </style>
  </>
);
export default LeftSideBarProjectLists;

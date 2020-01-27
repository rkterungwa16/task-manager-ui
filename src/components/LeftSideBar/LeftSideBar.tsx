import LeftSideBarHeader from "./LeftSideBarHeader";
import LeftSideBarProjectLists from "./LeftSideBarProjectLists";

const LeftSideBar = () => (
  <>
    <div className="left_side-bar">
      <div className="list_container">
        <LeftSideBarHeader />
        <LeftSideBarProjectLists />
      </div>
    </div>
    <style jsx>{`
      .left_side-bar {
        width: 300px;
        height: calc(100vh - 50px);
        padding-top: 74px;
        margin-left: -32px;
        position: fixed;
        overflow-x: hidden;
        overflow-y: hidden;
        border-right: 1px solid #e1e1e1;
        background-color: #ededed;
        padding-left: 42px;
        padding-right: 10px;
        margin-left: 0;
      }
      .list_container {
        width: 100%;
        padding-bottom: 30px;
        height: 100%;
      }
    `}</style>
  </>
);
export default LeftSideBar;

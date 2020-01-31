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
        width: 50%;
        height: 100vh;
        padding-top: 74px;
        padding-left: 25px;
        padding-right: 25px;
        margin-left: -32px;
        position: relative;
        overflow-x: hidden;
        overflow-y: hidden;
        border-right: 1px solid #e1e1e1;
        background-color: #ededed;
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

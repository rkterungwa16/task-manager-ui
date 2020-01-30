import LeftSideBarHeader from "./LeftSideBarHeader";

const LeftSideBar = () => (
  <>
    <div className="left_side-bar">
      <div className="list_container">
        <LeftSideBarHeader />
      </div>
    </div>
    <style jsx>{`
      .left_side-bar {
        width: 50%;
        height: 100vh;
        padding-top: 74px;
        margin-left: -32px;
        position: relative;
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

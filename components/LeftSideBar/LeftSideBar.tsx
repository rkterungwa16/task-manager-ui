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
          width: 266px;
          height: calc(100vh - 50px);
          padding-top: 74px;
          margin-left: -32px;
          position: fixed;
          overflow-x: hidden;
          overflow-y: hidden;
          border-right: 1px solid #e1e1e1;
          background-color: #ededed;
          padding-left: 42px;
          margin-left: 0;
        }
        .list_container {
          width: 265px;
          padding-bottom: 30px;
          height: 100%;
        }
      `}</style>
  </>
)
export default LeftSideBar;

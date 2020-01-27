import Add from "react-ionicons/lib/IosAdd";
import ArrowForward from "react-ionicons/lib/IosArrowForward";

const LeftSideBarHeader = () => (
  <>
    <header className="project-list_header">
      <button type="button" className="btn-long">
        <ArrowForward fontSize="25px" />
        Projects
      </button>
      <Add fontSize="45px" />
    </header>
    <style jsx>{`
      .project-list_header {
        border-bottom: 1px solid #e1e1e1;
        display: flex;
        justify-content: space-between;
        align-items: center;
        cursor: pointer;
      }
      .project-list_header:hover {
        background-color: #e1e1e1;
      }
      .btn-long {
        display: flex;
        align-items: center;
        flex: 1;
        text-align: left;
        font-size: 14px;
        color: #333;
        font-weight: bold;
        padding: 10px 0;
        background: none;
        border: none;
        cursor: pointer;
      }
    `}</style>
  </>
);
export default LeftSideBarHeader;

import MoreIcon from "react-ionicons/lib/IosMore";

import { Text, Dropdown } from "../SharedComponents";

const projectTextStyle = {
  fontSize: "16px",
  color: "#8d8d8d",
  fontWeight: "600",
  wordBreak: "break-all",
  marginLeft: "5px"
}
const LeftSideBarProjectLists = () => (
  <>
    <div className="project_lists-wrapper">
      <ul className="project_lists">
        <li className="project_item">
          <div className="project_item-container">
            <div className="project_item-wrapper">
              <div className="project_color" />
              <Text
                text="Tiv Language Studies"
                style={projectTextStyle}
              />
              <div className="project_menu-icon">
                <MoreIcon
                  fontSize="35px"
                  color="#8d8d8d"
                />
              </div>
            </div>
          </div>
        </li>
        <li className="project_item">
          <div className="project_item-container">
            <div className="project_item-wrapper">
              <div className="project_color" />
              <Text
                text="Tiv Language Studies and all things"
                style={projectTextStyle}
              />
              <div className="project_menu-icon">
                <MoreIcon
                  fontSize="35px"
                  color="#8d8d8d"
                />
              </div>
            </div>
          </div>
          <Dropdown />
        </li>
      </ul>
    </div>
    <style jsx>{`
      .project_lists-wrapper {
        width: 100%;
      }
      ul {
        width: 100%;
        list-style: none;
        padding: 0;
      }

      .project_item {
        width: 96%;
      }

      .project_item-container {
        cursor: pointer;
        padding: 10px;
        border-radius: 5px;
        width: 100%;
      }

      .project_item-container:hover {
        background-color: #ededed;
      }

      .project_item-wrapper {
        display: flex;
        align-items: center;
        width: 85%;
      }

      .project_color {
        height: 15px;
        width: 15px;
        border-radius: 50%;
        background-color: #767676;
      }

      .project_menu-icon {
        position: absolute;
        right: 4px;
      }

    `}</style>
  </>
)
export default LeftSideBarProjectLists;

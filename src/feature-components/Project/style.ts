export const flexRowCenter = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

// Break styles into Components. Example Project Modal, Color, Project
// Determine shared styles between these components (Project shared styles)
// Break each component into sub components. Example Project component (button, Row etc).
// Determine global style for each Component example: color, font, border radius, width etc.

// Create a heirachy of shared properties. Top most shared by all etc.
// Group components according e.g color palette, favourites, task content input button.
// Determine properties shared across all components (top most level)
// Determine properties shared by elements within each component

export const projectTextStyle = {
  fontSize: "14px",
  color: "#8d8d8d",
  wordBreak: "break-all",
  paddingLeft: "5px",
  display: "flex",
  alignItems: "center",
  width: "100%"
};

export const buttonStyle = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  alignSelf: "center",
  borderRadius: "4px",
  border: "none",
  height: "30px",
  fontSize: "10px",
  lineHeight: "normal",
  textAlign: "center",
  letterSpacing: "2px",
  backgroundColor: "#c23d38",
  color: "#FFFFFF",
  width: "60px",
  cursor: "pointer"
};

export const projectModalFormInputStyle = {
  display: "flex",
  zIndex: "3",
  alignSelf: "center",
  marginTop: "20px",
  marginBottom: "20px",
  backgroundColor: "#FFFFFF",
  borderRadius: "4px",
  border: "1px solid rgba(0,0,0,0.15)",
  width: "90%",
  height: "30px",
  textIndent: "25px",
  lineHeight: "normal",
  color: "#767676",
  letterSpacing: "1.5px"
};

export const buttonRowStyle = {
  display: "flex",
  alignSelf: "center",
  width: "90%",
  justifyContent: "flex-end",
  padding: "15px"
};

export const colorPaletteRowStyle = {
  display: "flex",
  alignSelf: "center",
  width: "90%",
  padding: "5px"
};

export const addFavouriteRowStyle = {
  display: "flex",
  width: "90%",
  padding: "5px"
};

export const projectTextLinkStyle = {
  width: "100%;"
};

export const textBadgeStyle = {
  width: "15px;",
  textAlign: "center;",
  borderRadius: "4px;",
  backgroundColor: "white;",
  display: "inline-block;",
  position: "absolute;",
  right: "3px;"
};

export const projectDropdownItemTextStyle = {
  fontSize: "16px",
  color: "#8d8d8d",
  fontWeight: "100",
  marginLeft: "5px"
};

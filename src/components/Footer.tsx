function Footer() {
  return (
    <footer style={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      gap: "10px",
      padding: "10px",
      fontSize: "14px"
    }}>
      <p style={{ margin: 0 }}>- Contact Me - </p>
      <p style={{ margin: 0 }}>
        <a href="mailto:work.ditto909@passmail.net" style={{ textDecoration: "none", color: "inherit" }}>
          work.ditto909@passmail.net
        </a>
      </p>
    </footer>
  );
}

export default Footer;
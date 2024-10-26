 "use client"

export default function Home() {
  return (
    <>
      

      <main style={styles.main}>
        <section id="home" style={styles.section}>
          <h2>Home</h2>
          <p>This is the home section. Welcome to our simple frontend page.</p>
        </section>

        <section id="about" style={styles.section}>
          <h2>About</h2>
          <p>This section  information about us. We aim to provide excellent services.</p>
        </section>

        <section id="services" style={styles.section}>
          <h2>Services</h2>
          <p>Here, we list the services we offer.</p>
        </section>

        <section id="contact" style={styles.section}>
          <h2>Contact</h2>
        </section>
      </main>
    </>
  );
}

const styles = {
  main: {
    padding: '1rem',
    maxWidth: '800px',
    margin: 'auto',
  },
  section: {
    marginBottom: '1.5rem',
  },
};

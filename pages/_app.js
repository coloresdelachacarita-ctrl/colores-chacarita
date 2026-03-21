
function MyApp({ Component, pageProps }) {
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp


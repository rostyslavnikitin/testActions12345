import '../styles/globals.css'

console.log("\n\n NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR:", process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR, "\n\n")

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

import '../styles/globals.css'

console.log("\n\n NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR:", process.env.NEXT_PUBLIC_SENTRY_SERVER_ROOT_DIR, "\n\n")
console.log("\n\n foo * bar:", process.env.NEXT_PUBLIC_BAR, "\n\n")
console.log("\n\n foo * bar:", Number(process.env.NEXT_PUBLIC_FOO) *  Number(process.env.NEXT_PUBLIC_BAR), "\n\n")

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp

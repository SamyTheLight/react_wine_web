import PropTypes from 'prop-types'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../services/theme'

const AppLayout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    {children}
  </ThemeProvider>
)

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout

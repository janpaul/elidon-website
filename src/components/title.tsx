import PropTypes from 'prop-types'
import styles from './title.module.css'

const Title = ({ children }) => <h1 className={styles.title}>{children}</h1>
Title.propTypes = {
  children: PropTypes.node.isRequired,
}
export default Title

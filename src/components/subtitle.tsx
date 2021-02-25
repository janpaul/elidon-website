import PropTypes from 'prop-types'
import styles from './subtitle.module.css'

const SubTitle = ({ children }) => (
  <h3 className={styles.subtitle}>{children}</h3>
)
SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
}

export default SubTitle

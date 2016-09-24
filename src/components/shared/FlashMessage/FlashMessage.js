import React, {PropTypes, PureComponent} from 'react';
import classNames from 'classnames';
import Clickable from 'ui-components/src/Clickable';
import Icon from 'ui-components/src/Icon';
import styles from './FlashMessage.scss';

export default class FlashMessage extends PureComponent {

  static displayName = 'FlashMessage';

  static propTypes = {
    className: PropTypes.string,
    message: PropTypes.oneOfType([
      PropTypes.element,
      PropTypes.string
    ]).isRequired,
    id: PropTypes.string.isRequired,
    onDismiss: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['default', 'error', 'warning', 'success']).isRequired
  };

  static defaultProps = {
    type: 'default'
  };

  render() {
    const {className, message, type} = this.props;
    const classes = classNames(styles.main, className, styles[type]);
    const messageClasses = classNames(styles.message, styles[type]);

    return (
      <div className={classes}>
        <span className={messageClasses}>{message}</span>
        <Clickable onClick={this._handleDismiss}>
          <Icon className={styles.closeButton} name='close' size={20} />
        </Clickable>
      </div>
    );
  }

  _handleDismiss = () => {
    this.props.onDismiss(this.props.id);
  };

}
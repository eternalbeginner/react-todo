import { Component } from 'react';

const withToggler = (WrappedComponent) => {
	return class WithToggler extends Component {
		constructor(props) {
			super(props);

			this.state = {
				isHidden: false,
			};

			this.toggle = this.toggle.bind(this);
		}

		toggle() {
			this.setState((prevState) => ({
				isHidden: !prevState.isHidden,
			}));
		}

		render() {
			return this.state.isHidden ? (
				this.props.children({ toggle: this.toggle })
			) : (
				<WrappedComponent {...this.props} toggle={this.toggle} />
			);
		}
	};
};

export default withToggler;

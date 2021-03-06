import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './index.css'

class VerticalButtonGroupsControl extends React.Component {
  static propTypes = {
    map: PropTypes.any,
    sdk: PropTypes.any,
    height: PropTypes.number,
    ctrlOptions: PropTypes.shape({
      showBtnCount: PropTypes.number,
      position: PropTypes.number,
      offset: PropTypes.shape({
        x: PropTypes.number,
        y: PropTypes.number
      })
    }),
    labelFormater: PropTypes.func,
    mapOnloadOver: PropTypes.bool
  }

  constructor(props) {
    super(props)
    this.state = {
      focusFloor: props.map.focusFloor,
      showGroups: false,
      listFloors: null
    }
  }

  componentDidMount() {
    const { map } = this.props
    map.on('focusGroupIDChanged', () => {
      this.setState({
        focusFloor: map.focusFloor
      })
    })

    setTimeout(() => {
      this.setState({
        focusFloor: map.focusFloor,
        listFloors: map.listFloors
      })
    }, 500)
  }

  componentWillUnmount() {
    const { map } = this.props
    map.off('focusGroupIDChanged')
  }

  _getPosition = () => {
    const { height, sdk, ctrlOptions } = this.props
    if (ctrlOptions && !ctrlOptions.offset) {
      if (!ctrlOptions.position) {
        return {
          right: '10px',
          top: `${height * 0.82}px`
        }
      }
      if (sdk.controlPositon.LEFT_TOP === ctrlOptions.position) {
        return {
          left: '10px',
          top: `${height * 0.18}px`
        }
      }
      if (sdk.controlPositon.LEFT_BOTTOM === ctrlOptions.position) {
        return {
          left: '10px',
          top: `${height * 0.82}px`
        }
      }
      if (sdk.controlPositon.RIGHT_TOP === ctrlOptions.position) {
        return {
          right: '10px',
          top: `${height * 0.18}px`
        }
      }
      if (sdk.controlPositon.RIGHT_BOTTOM === ctrlOptions.position) {
        return {
          right: '10px',
          top: `${height * 0.82}px`
        }
      }
    }

    if (!ctrlOptions.position) {
      return {
        right: `${10 + ctrlOptions.offset.x}px`,
        top: `${height * 0.82 - ctrlOptions.offset.y}px`
      }
    }

    if (sdk.controlPositon.LEFT_TOP === ctrlOptions.position) {
      return {
        left: `${10 + ctrlOptions.offset.x}px`,
        top: `${height * 0.18 - ctrlOptions.offset.y}px`
      }
    }
    if (sdk.controlPositon.LEFT_BOTTOM === ctrlOptions.position) {
      return {
        left: `${10 + ctrlOptions.offset.x}px`,
        top: `${height * 0.82 - ctrlOptions.offset.y}px`
      }
    }
    if (sdk.controlPositon.RIGHT_TOP === ctrlOptions.position) {
      return {
        right: `${10 + ctrlOptions.offset.x}px`,
        top: `${height * 0.18 - ctrlOptions.offset.y}px`
      }
    }
    if (sdk.controlPositon.RIGHT_BOTTOM === ctrlOptions.position) {
      return {
        right: `${10 + ctrlOptions.offset.x}px`,
        top: `${height * 0.82 - ctrlOptions.offset.y}px`
      }
    }
  }

  _toggleShowGroups = () => {
    this.setState({
      showGroups: !this.state.showGroups
    })
  }

  _getFloorName = (floorLevel, isFocusFloorName) => {
    const {
      labelFormater,
      map: { focusFloor }
    } = this.props
    if (!floorLevel || Number.isNaN(floorLevel)) {
      return ''
    }
    //重置时重新设置楼层按钮显示
    if (isFocusFloorName && typeof focusFloor === 'undefined') {
      floorLevel = this.state.listFloors[0]
      setTimeout(() => {
        this.setState({
          focusFloor: floorLevel
        })
      }, 50)
    }
    if (labelFormater) {
      return `${labelFormater(floorLevel)}`
    }
    if (floorLevel > 0) {
      return `F${floorLevel}`
    }
    return `B${Math.abs(floorLevel)}`
  }

  _changeFloor = floor => {
    const { map } = this.props
    map.focusFloor = floor
    //切换时存储最新的楼层信息
    this.setState({
      focusFloor: floor
    })
    this._toggleShowGroups()
  }

  _getDisplayGroups = containerPosition => {
    const { map, ctrlOptions } = this.props
    const { showGroups } = this.state
    const { showBtnCount } = ctrlOptions
    if (!showGroups || !map || !map.listFloors) {
      return null
    }

    const realBtnCount =
      showBtnCount > map.listFloors.length || showBtnCount < 1 ? map.listFloors.length : showBtnCount || 3

    const groupsContainerPosition = {
      top: `-${realBtnCount * 42 + 10}px`,
      height: `${realBtnCount * 42}px`
    }

    return (
      <div className={styles.groupsContainer} style={groupsContainerPosition}>
        {map.listFloors.map((floor, i) => {
          return (
            <div
              key={floor}
              className={classnames(styles.floorBlock, {
                [styles.active]: floor === map.focusFloor
              })}
              onClick={() => this._changeFloor(floor)}
            >
              {this._getFloorName(floor)}
            </div>
          )
        })}
      </div>
    )
  }

  render() {
    const { focusFloor } = this.state
    const { mapOnloadOver } = this.props
    const containerPosition = this._getPosition()
    return (
      <div
        className={styles.verticalButtonGroup}
        style={Object.assign({}, containerPosition, { display: mapOnloadOver ? 'block' : 'none' })}
      >
        {this._getDisplayGroups(containerPosition)}
        <div
          className={classnames(styles.floorBlock, styles.withBorder, styles.active)}
          onClick={this._toggleShowGroups}
        >
          {this._getFloorName(focusFloor, true)}
        </div>
      </div>
    )
  }
}

export default VerticalButtonGroupsControl

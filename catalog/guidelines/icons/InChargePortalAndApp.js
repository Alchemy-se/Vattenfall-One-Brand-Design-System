import React from 'react'

const InChargePortalAndApp = () => {
  return (
    <div className='vf-incharge-icons-portal-and-app' style={wrapperStyle}>
      <section style={sectionStyle}>
        <h4 style={headingStyle}>Mobile App</h4>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-charging-fast'
            data-tooltip='vf-icon-custom-charging-fast'
          ></span>
          <span style={textStyle}>Fast charger</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-charging-slow'
            data-tooltip='vf-icon-custom-charging-slow'
          ></span>
          <span style={textStyle}>Slow charger</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-add-card'
            data-tooltip='vf-icon-custom-add-card'
          ></span>
          <span style={textStyle}>Add card</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-charge-card'
            data-tooltip='vf-icon-custom-charge-card'
          ></span>
          <span style={textStyle}>Charge card</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-lost-card'
            data-tooltip='vf-icon-custom-lost-card'
          ></span>
          <span style={textStyle}>Lost card</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-remove_card'
            data-tooltip='vf-icon-custom-remove_card'
          ></span>
          <span style={textStyle}>Remove card</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-eye-closed'
            data-tooltip='vf-icon-custom-eye-closed'
          ></span>
          <span style={textStyle}>Hide password</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-filters'
            data-tooltip='vf-icon-custom-filters'
          ></span>
          <span style={textStyle}>filters</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-location'
            data-tooltip='vf-icon-custom-location'
          ></span>
          <span style={textStyle}>Current location</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-new-route'
            data-tooltip='vf-icon-custom-new-route'
          ></span>
          <span style={textStyle}>Open in map application</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-right-small'
            data-tooltip='vf-icon-custom-right-small'
          ></span>
          <span style={textStyle}>List(iOS)</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-service'
            data-tooltip='vf-icon-custom-service'
          ></span>
          <span style={textStyle}>Report charging station</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-custom-undo'
            data-tooltip='vf-icon-custom-undo'
          ></span>
          <span style={textStyle}>Undo</span>
        </div>
      </section>
      <section style={sectionStyle}>
        <h4 style={headingStyle}>Charging Point Status</h4>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-available'
            data-tooltip='vf-icon-available'
          ></span>
          <span style={textStyle}>Available</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-unavailable'
            data-tooltip='vf-icon-unavailable'
          ></span>
          <span style={textStyle}>Occupied</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-error'
            data-tooltip='vf-icon-error'
          ></span>
          <span style={textStyle}>Error</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-unknown'
            data-tooltip='vf-icon-unknown'
          ></span>
          <span style={textStyle}>Unknown</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-charging'
            data-tooltip='vf-icon-charging'
          ></span>
          <span style={textStyle}>Active charging session</span>
        </div>
      </section>
      <section style={sectionStyle}>
        <h4 style={headingStyle}>Connectors</h4>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-type2'
            horizAdvX='1205'
            data-tooltip='vf-icon-type2'
          ></span>
          <span style={textStyle}>Type 2</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-chademo'
            data-tooltip='vf-icon-chademo'
          ></span>
          <span style={textStyle}>ChaDeMo</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-schuko'
            data-tooltip='vf-icon-schuko'
          ></span>
          <span style={textStyle}>Shuko</span>
        </div>

        <div style={itemStyle}>
          <span
            className='p-1 vf-tooltip vf-tooltip--blue-solid vf-icon-ccs'
            horizAdvX='975'
            data-tooltip='vf-icon-ccs'
          ></span>
          <span style={textStyle}>CCS</span>
        </div>
      </section>
    </div>
  )
}

const wrapperStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
}

const sectionStyle = {
  width: '330px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  marginBottom: "72px"
}

const itemStyle = {
  display: 'flex',
  justifyContent: 'flex-start',
  width: '100%',
  alignItems: 'center',
}

const headingStyle = {
  width: '100%',
  textAlign: 'left',
  paddingLeft: '8px',
}

const textStyle = {
  paddingLeft: '12px',
}

export default InChargePortalAndApp

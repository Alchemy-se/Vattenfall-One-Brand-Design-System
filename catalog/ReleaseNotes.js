import React, { Fragment } from 'react'
import PageHeader from './lib/pageHeader'

const ReleaseNotes = () => {
  return (
    <Fragment>
      <PageHeader title='Release Notes' />
      <div style={styles}>
        <section className='p-2 vf-border-top-gray-200'></section>
        <h3>v.7.19.0</h3>
        <h4>Dropdown updated</h4>
        <p>Adjusted dropdown component with updated.</p>
        <h4>Scrollable Tabs</h4>
        <p>New Fixed and Scrollable Tab-bar for mobile.</p>
        <h4>Visual Pickers</h4>
        <p>New component for selection, assets and guidelines.</p>
        <h4>InCharge Specific</h4>
        <p>
          Logotypes for InCharge Nordic, Icons, Colours, and Buttons now in our
          system as assets and with guidelines.
        </p>
        <section className='p-2 vf-border-top-gray-200'></section>
        <h3>v.7.18.0</h3>
        <h4>Icons, class-name</h4>
        <p>
          Updated and made some clarification regarding the icons on the
          component page. (Rules for sizing, small, medium, large will be
          implemented in a upcoming release).
        </p>
        <h4>New Spinner</h4>
        <p>Component and Guideline for our new Spinner.</p>
        <h4>Main Navigation</h4>
        <p>
          Component and Guideline for Navigation, Desktop, Tablet and Mobile.
        </p>
        <h4>Button Group </h4>
        <p>
          Adjusted Button group with updated guideline and version for mobile
          usage.
        </p>
        <h4>New Input fields, Alternative with Label.</h4>
        <p>
          New set of input fields now with Label above. (Rules for sizing,
          small, medium, large will be implemented in a upcoming release).
        </p>
        <h4>User reported Bugs</h4>
        <p>
          Bad syntax in developer intro fixed. Adjusted typography for H1, h3,
          H3 etc for better overall usage. Adjusted Gutter size for Mobile and
          Tablet.
        </p>
        <section className='p-2 vf-border-top-gray-200'></section>
        <h3>v.7.17.0</h3>
        <h4>Upload Component</h4>
        <p>Updated Component and guidelines for the upload asset.</p>
        <h4>Bug and Minor fixes</h4>
        <p>
          Text changes and overall update of the copy on the entre DDS.
          Improvments of the overall design of the DDS.
        </p>
      </div>
    </Fragment>
  )
}
const styles = {
  marginLeft: '40px',
}

export default ReleaseNotes

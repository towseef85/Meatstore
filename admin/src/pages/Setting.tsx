import { observer } from 'mobx-react-lite'
import { Tab } from 'semantic-ui-react'
import { useStore } from '../store/store'
import Offers from './Offers'
import Slider from './Slider'
import WidgetHeading from './WidgetHeading'

export default observer(function Setting() {
    const {unitStore:{Units, loadUnits}} = useStore()
    const panes = [
        { menuItem: {key:'Slider', icon:'sliders horizontal', content:'Slider'}, render: () => <Tab.Pane><Slider/></Tab.Pane> },
        { menuItem: {key:'Widgets', icon:'map signs', content:'Widget'}, render: () => <Tab.Pane><WidgetHeading/></Tab.Pane> },
        { menuItem: {key:'Offers', icon:'puzzle piece', content:'Offers'}, render: () => <Tab.Pane><Offers/></Tab.Pane> },
      ]
    return (
        <Tab
        menu={{ fluid: true, vertical: true }}
        menuPosition='left'
        panes={panes}
      />
    )
})

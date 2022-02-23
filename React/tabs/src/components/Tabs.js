
function Tabs(props) {



    const {tabList, setActiveTab, activeTab} = props

    const styled = (indexFromBelow) => {
        if(activeTab === indexFromBelow) {
            return "activeTabStyle"
        } else {
            return "inactiveTabStyle"
        }
    }


    return (
        <div className="tabs">
    
            {tabList.map((tab, index) => (
                <p className={`${styled(index)}`}
                onClick={()=> setActiveTab(index)}>
                    {tab.label}
                </p>
            ))
        }
        </div>
    );
}

export default Tabs;

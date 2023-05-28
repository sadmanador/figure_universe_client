import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import TabCardGroup from "../../../shared/TabCardGroup/TabCardGroup";

const TabSection = () => {
  return (
    <div className="text-center py-12">
      <h1 className="lg:text-4xl font-bold mb-7">Category Collection</h1>
      <Tabs>
        <TabList>
          <Tab>Marvel</Tab>
          <Tab>Transformer</Tab>
          <Tab>Fantasy</Tab>
          <Tab>Star Wars</Tab>
          <Tab>Anime</Tab>
          <Tab>Disney</Tab>
          <Tab>Sports</Tab>
        </TabList>

        <TabPanel>
          <TabCardGroup category="marvel" />
        </TabPanel>
        <TabPanel>
          <TabCardGroup category="transformer" />
        </TabPanel>
        <TabPanel>
          <TabCardGroup category="fantasy" />
        </TabPanel>
        <TabPanel>
          <TabCardGroup category="star wars" />
        </TabPanel>
        <TabPanel>
          <TabCardGroup category="anime" />
        </TabPanel>
        <TabPanel>
          <TabCardGroup category="disney" />
        </TabPanel>
        <TabPanel>
          <TabCardGroup category="sports" />
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default TabSection;

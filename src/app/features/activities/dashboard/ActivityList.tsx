import { observer } from "mobx-react-lite";
import React, { Fragment } from "react";
import { Header } from "semantic-ui-react";
import { useStore } from "../../../stores/store";
import ActivityListItem from "./ActivityListItem";

function ActivityList() {
  const { activityStore } = useStore();
  const { groupActivities } = activityStore;

  return (
    <>
      {groupActivities.map(([group, activities]) => (
        <Fragment key={group}>
          <Header sub color="teal">
            {group}
          </Header>
          {activities.map((activity) => (
            <ActivityListItem key={activity.id} activity={activity} />
          ))}
        </Fragment>
      ))}
    </>
  );
}

export default observer(ActivityList);
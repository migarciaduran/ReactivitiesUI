import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../layout/LoadingComponent";
import { useStore } from "../../../stores/store";

function ActivityDetails() {
  const { activityStore } = useStore();
  const {
    selectedActivity: activity,
    openForm,
    cancelSelectedActivity,
  } = activityStore;

  if (!activity) return <LoadingComponent />;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{activity.title}</Card.Header>
        <Card.Meta>
          <span>{activity.date}</span>
        </Card.Meta>
        <Card.Description>{activity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button
          onClick={() => openForm(activity.id)}
          basic
          color="blue"
          content="Edit"
        />
        <Button
          onClick={cancelSelectedActivity}
          basic
          color="green"
          content="Cancel"
        />
      </Card.Content>
    </Card>
  );
}

export default ActivityDetails;

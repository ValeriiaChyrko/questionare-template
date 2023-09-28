import "./styles.css";
import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import { SurveyCreator, SurveyCreatorComponent } from "survey-creator-react";
import { surveyJSON } from "./survey";

const options = {
  haveCommercialLicense: true,
  showLogicTab: true
};

export default function SurveyComponent() {
  const creator = new SurveyCreator(options);
  creator.JSON = surveyJSON;
  // ...
  // Add event handlers, survey JSON, and customizations here
  // ...
  return <SurveyCreatorComponent creator={creator} />;
}

import { withActionOutput } from '../utils';

import WFWorkflowAction from '../interfaces/WF/WFWorkflowAction';

/**
 * @action Get Link to File
 * @section Content Types > Documents > File Storage
 * @icon Documents
 *
 * Gets a public link to the file passed into the action.
 *
 * ```js
 * getLinkToFile();
 * ```
 */

const getLinkToFile = (): WFWorkflowAction => ({
  WFWorkflowActionIdentifier: 'is.workflow.actions.file.getlink',
  WFWorkflowActionParameters: {},
});

export default withActionOutput(getLinkToFile);

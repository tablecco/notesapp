// import { defineFunction } from "@aws-amplify/backend";
import { Stack } from 'aws-cdk-lib';
import { LogGroup, RetentionDays } from 'aws-cdk-lib/aws-logs';
// import { PolicyStatement } from 'aws-cdk-lib/aws-iam';

// export const loggingResources = defineFunction(
//     {
//         name: 'amplifyLogging',
//         entry: './handler.ts'
//     }
// );
export function createLoggingResources(stack: Stack) {
    const logGroup = new LogGroup(
        stack,
        'AmplifyLogGroup',
        {
            logGroupName: '/aws/amplify/notesapp',
            retention: RetentionDays.ONE_WEEK
        }
    );
    return {
        logGroup,
        logGroupName: logGroup.logGroupName,
        logGroupArn: logGroup.logGroupArn
    };
}
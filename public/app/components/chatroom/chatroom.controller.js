import Constants from '../../utils/constants';
import { Inject } from '../../utils/decorators';
import { compose, lazy, forEach } from '../../utils/helpers';

@Inject('$scope', '$stateParams', 'SocketFactory', 'MessagingFactory')
export default class ClassroomController {
  constructor($scope, $stateParams, SocketFactory, MessagingFactory) {
    $scope.messages = [];
    let mostRecentMessage = {};
    $scope.$parent.selectedTarget = $scope.target = $stateParams.target;

    const scopedSocket = SocketFactory($scope);
    const messenger = MessagingFactory($scope, $scope.user);
    Object.assign(this, { $scope, scopedSocket, messenger });

    const addMessage = $scope.messages.push.bind($scope.messages);

    const processMessage = (message) => {
      if (mostRecentMessage.from && mostRecentMessage.from.id === message.from.id) {
        mostRecentMessage.content.push(...message.content);
      } else {
        addMessage(message);
        mostRecentMessage = message;
      }
    }

    scopedSocket
      .on(Constants.greet, (m) => {
        addMessage(m);
      })
      .on(Constants.grieve, (m) => {
        addMessage(m);
      })
      .on(Constants.message, (m) => {
        processMessage(m);
      })
      .on(Constants.bulkMessageUpdate, (ms) => {
        forEach(processMessage)(ms);
      })
      .emit(Constants.join, $scope.target, $scope.user)
      .emit(Constants.refreshMessages, $scope.target);

    $scope.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage() {
    this.messenger.send(this.$scope.target, this.$scope.message);

    this.$scope.message = ''
    this.$scope.messageForm.$setPristine();
  }
}

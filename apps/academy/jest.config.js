module.exports = {
  name: 'academy',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/academy',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};

import mongoose from "mongoose";
import { DB_NAME } from './../constants.js';
 const connectDB = async ()=> {
    try {
        console.log(process.env.MONGODB_URI)
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB Connected !! DB HOST: ${connectionInstance.connection.host}`)
        // console.log('CONNECTION INSTANCE OF DB')
        // console.log(connectionInstance);
    } catch (error) {
        console.log( "DB connection failed!!!!! :",error);
        process.exit(1)
    }
 }

 export default connectDB


//  CONNECTION INSTANCE OF DB
// <ref *1> Mongoose {
//   connections: [
//     NativeConnection {
//       base: [Circular *1],
//       collections: {},
//       models: {},
//       config: {},
//       replica: false,
//       options: null,
//       otherDbs: [],
//       relatedDbs: {},
//       states: [Object: null prototype],
//       _readyState: 1,
//       _closeCalled: undefined,
//       _hasOpened: true,
//       plugins: [],
//       id: 0,
//       _queue: [],
//       _listening: false,
//       _connectionOptions: [Object],
//       _connectionString: 'mongodb+srv://prakhar:spforzae5@cluster0.gjhursf.mongodb.net/vidcortDB',
//       client: [MongoClient],
//       '$initialConnection': [Promise],
//       db: [Db],
//       host: 'ac-qwzmn30-shard-00-00.gjhursf.mongodb.net',
//       port: 27017,
//       name: 'vidcortDB'
//     }
//   ],
//   nextConnectionId: 1,
//   models: {},
//   events: EventEmitter {
//     _events: [Object: null prototype] {},
//     _eventsCount: 0,
//     _maxListeners: undefined,
//     [Symbol(kCapture)]: false
//   },
//   __driver: {
//     Collection: [Function: NativeCollection],
//     Connection: [Function: NativeConnection] { STATES: [Object: null prototype] }
//   },
//   options: {
//     pluralization: true,
//     autoIndex: true,
//     autoCreate: true,
//     autoSearchIndex: false,
//     [Symbol(mongoose:default)]: true
//   },
//   _pluralize: [Function: pluralize],
//   Schema: [Function: Schema] {
//     reserved: [Object: null prototype] {
//       validate: 1,
//       toObject: 1,
//       save: 1,
//       remove: 1,
//       populated: 1,
//       isNew: 1,
//       isModified: 1,
//       init: 1,
//       get: 1,
//       errors: 1,
//       collection: 1,
//       removeListener: 1,
//       listeners: 1,
//       emit: 1,
//       prototype: 1
//     },
//     Types: {
//       Array: [Function],
//       BigInt: [Function],
//       Boolean: [Function],
//       Buffer: [Function],
//       Date: [Function],
//       Decimal: [Function],
//       Decimal128: [Function],
//       DocumentArray: [Function],
//       Map: [Function],
//       Mixed: [Function],
//       Number: [Function],
//       ObjectId: [Function],
//       String: [Function],
//       Subdocument: [Function],
//       UUID: [Function],
//       Oid: [Function],
//       Object: [Function],
//       Bool: [Function],
//       ObjectID: [Function]
//     },
//     ObjectId: [Function: SchemaObjectId] {
//       schemaName: 'ObjectId',
//       defaultOptions: {},
//       get: [Function (anonymous)],
//       set: [Function: set],
//       setters: [],
//       _checkRequired: [Function (anonymous)],
//       _cast: [Function: castObjectId],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     }
//   },
//   model: [Function (anonymous)],
//   plugins: [
//     [ [Function: saveSubdocs], [Object] ],
//     [ [Function], [Object] ],
//     [ [Function: trackTransaction], [Object] ],
//     [ [Function: validateBeforeSave], [Object] ]
//   ],
//   default: [Circular *1],
//   mongoose: [Circular *1],
//   cast: [Function: cast],
//   STATES: [Object: null prototype] {
//     '0': 'disconnected',
//     '1': 'connected',
//     '2': 'connecting',
//     '3': 'disconnecting',
//     '99': 'uninitialized',
//     disconnected: 0,
//     connected: 1,
//     connecting: 2,
//     disconnecting: 3,
//     uninitialized: 99
//   },
//   setDriver: [Function: setDriver],
//   set: [Function (anonymous)],
//   get: [Function (anonymous)],
//   createConnection: [Function (anonymous)],
//   connect: [AsyncFunction: connect],
//   disconnect: [AsyncFunction: disconnect],
//   startSession: [Function (anonymous)],
//   pluralize: [Function (anonymous)],
//   deleteModel: [Function (anonymous)],
//   modelNames: [Function (anonymous)],
//   plugin: [Function (anonymous)],
//   version: '8.2.4',
//   Mongoose: [Function: Mongoose],
//   SchemaType: [Function: SchemaType] {
//     cast: [Function: cast],
//     set: [Function: set],
//     get: [Function (anonymous)],
//     _isRef: [Function (anonymous)],
//     checkRequired: [Function (anonymous)],
//     CastError: [class CastError extends MongooseError],
//     ValidatorError: [class ValidatorError extends MongooseError]
//   },
//   SchemaTypes: {
//     Array: [Function: SchemaArray] {
//       schemaName: 'Array',
//       options: [Object],
//       defaultOptions: {},
//       set: [Function: set],
//       setters: [],
//       get: [Function (anonymous)],
//       _checkRequired: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     },
//     BigInt: [Function: SchemaBigInt] {
//       schemaName: 'BigInt',
//       defaultOptions: {},
//       _cast: [Function: castBigInt],
//       set: [Function: set],
//       setters: [],
//       get: [Function (anonymous)],
//       cast: [Function: cast],
//       _checkRequired: [Function (anonymous)],
//       checkRequired: [Function (anonymous)],
//       '$conditionalHandlers': [Object]
//     },
//     Boolean: [Function: SchemaBoolean] {
//       schemaName: 'Boolean',
//       defaultOptions: {},
//       _cast: [Function],
//       set: [Function: set],
//       setters: [],
//       get: [Function (anonymous)],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       _checkRequired: [Function (anonymous)],
//       checkRequired: [Function (anonymous)],
//       '$conditionalHandlers': [Object]
//     },
//     Buffer: [Function: SchemaBuffer] {
//       schemaName: 'Buffer',
//       defaultOptions: {},
//       _checkRequired: [Function (anonymous)],
//       set: [Function: set],
//       setters: [],
//       get: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     },
//     Date: [Function: SchemaDate] {
//       schemaName: 'Date',
//       defaultOptions: {},
//       _cast: [Function: castDate],
//       set: [Function: set],
//       setters: [],
//       get: [Function (anonymous)],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       _checkRequired: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     },
//     Decimal: [Function: SchemaDecimal128] {
//       schemaName: 'Decimal128',
//       defaultOptions: {},
//       _cast: [Function: castDecimal128],
//       set: [Function: set],
//       setters: [],
//       get: [Function (anonymous)],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       _checkRequired: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     },
//     Decimal128: [Function: SchemaDecimal128] {
//       schemaName: 'Decimal128',
//       defaultOptions: {},
//       _cast: [Function: castDecimal128],
//       set: [Function: set],
//       setters: [],
//       get: [Function (anonymous)],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       _checkRequired: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     },
//     DocumentArray: [Function: SchemaDocumentArray] {
//       schemaName: 'DocumentArray',
//       options: [Object],
//       defaultOptions: {},
//       set: [Function: set],
//       setters: [],
//       get: [Function (anonymous)]
//     },
//     Map: [class SchemaMap extends SchemaType] {
//       schemaName: 'Map',
//       defaultOptions: {}
//     },
//     Mixed: [Function: SchemaMixed] {
//       schemaName: 'Mixed',
//       defaultOptions: {},
//       get: [Function (anonymous)],
//       set: [Function: set],
//       setters: []
//     },
//     Number: [Function: SchemaNumber] {
//       get: [Function (anonymous)],
//       set: [Function: set],
//       setters: [],
//       _cast: [Function: castNumber],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       schemaName: 'Number',
//       defaultOptions: {},
//       _checkRequired: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     },
//     ObjectId: [Function: SchemaObjectId] {
//       schemaName: 'ObjectId',
//       defaultOptions: {},
//       get: [Function (anonymous)],
//       set: [Function: set],
//       setters: [],
//       _checkRequired: [Function (anonymous)],
//       _cast: [Function: castObjectId],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     },
//     String: [Function: SchemaString] {
//       schemaName: 'String',
//       defaultOptions: {},
//       _cast: [Function: castString],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       get: [Function (anonymous)],
//       set: [Function: set],
//       setters: [],
//       _checkRequired: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     },
//     Subdocument: [Function: SchemaSubdocument] {
//       defaultOptions: {},
//       set: [Function: set],
//       setters: [],
//       get: [Function (anonymous)]
//     },
//     UUID: [Function: SchemaUUID] {
//       schemaName: 'UUID',
//       defaultOptions: {},
//       _cast: [Function (anonymous)],
//       get: [Function (anonymous)],
//       set: [Function: set],
//       setters: [],
//       cast: [Function: cast],
//       _checkRequired: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     },
//     Oid: [Function: SchemaObjectId] {
//       schemaName: 'ObjectId',
//       defaultOptions: {},
//       get: [Function (anonymous)],
//       set: [Function: set],
//       setters: [],
//       _checkRequired: [Function (anonymous)],
//       _cast: [Function: castObjectId],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     },
//     Object: [Function: SchemaMixed] {
//       schemaName: 'Mixed',
//       defaultOptions: {},
//       get: [Function (anonymous)],
//       set: [Function: set],
//       setters: []
//     },
//     Bool: [Function: SchemaBoolean] {
//       schemaName: 'Boolean',
//       defaultOptions: {},
//       _cast: [Function],
//       set: [Function: set],
//       setters: [],
//       get: [Function (anonymous)],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       _checkRequired: [Function (anonymous)],
//       checkRequired: [Function (anonymous)],
//       '$conditionalHandlers': [Object]
//     },
//     ObjectID: [Function: SchemaObjectId] {
//       schemaName: 'ObjectId',
//       defaultOptions: {},
//       get: [Function (anonymous)],
//       set: [Function: set],
//       setters: [],
//       _checkRequired: [Function (anonymous)],
//       _cast: [Function: castObjectId],
//       cast: [Function: cast],
//       _defaultCaster: [Function (anonymous)],
//       checkRequired: [Function (anonymous)]
//     }
//   },
//   VirtualType: [Function: VirtualType],
//   Types: {
//     Array: [Function: MongooseArray],
//     Buffer: [Function: MongooseBuffer] {
//       pathSymbol: Symbol(mongoose#Buffer#_path),
//       mixin: [Object],
//       Binary: [Function]
//     },
//     Embedded: [Function: ArraySubdocument] {
//       _events: undefined,
//       _eventsCount: 0,
//       _maxListeners: undefined,
//       setMaxListeners: [Function: setMaxListeners],
//       getMaxListeners: [Function: getMaxListeners],
//       emit: [Function: emit],
//       addListener: [Function: addListener],
//       on: [Function: addListener],
//       prependListener: [Function: prependListener],
//       once: [Function: once],
//       prependOnceListener: [Function: prependOnceListener],
//       removeListener: [Function: removeListener],
//       off: [Function: removeListener],
//       removeAllListeners: [Function: removeAllListeners],
//       listeners: [Function: listeners],
//       rawListeners: [Function: rawListeners],
//       listenerCount: [Function: listenerCount],
//       eventNames: [Function: eventNames]
//     },
//     Document: [Function: ArraySubdocument] {
//       _events: undefined,
//       _eventsCount: 0,
//       _maxListeners: undefined,
//       setMaxListeners: [Function: setMaxListeners],
//       getMaxListeners: [Function: getMaxListeners],
//       emit: [Function: emit],
//       addListener: [Function: addListener],
//       on: [Function: addListener],
//       prependListener: [Function: prependListener],
//       once: [Function: once],
//       prependOnceListener: [Function: prependOnceListener],
//       removeListener: [Function: removeListener],
//       off: [Function: removeListener],
//       removeAllListeners: [Function: removeAllListeners],
//       listeners: [Function: listeners],
//       rawListeners: [Function: rawListeners],
//       listenerCount: [Function: listenerCount],
//       eventNames: [Function: eventNames]
//     },
//     DocumentArray: [Function: MongooseDocumentArray],
//     Decimal128: [class Decimal128 extends BSONValue],
//     ObjectId: [class ObjectId extends BSONValue] { index: 10911838 },
//     Map: [class MongooseMap extends Map],
//     Subdocument: [Function: Subdocument],
//     UUID: [class UUID extends Binary]
//   },
//   Query: [Function: Query] {
//     base: {
//       toConstructor: [Function: toConstructor],
//       setOptions: [Function (anonymous)],
//       collection: [Function: collection],
//       collation: [Function (anonymous)],
//       '$where': [Function (anonymous)],
//       where: [Function (anonymous)],
//       equals: [Function: equals],
//       eq: [Function: eq],
//       or: [Function: or],
//       nor: [Function: nor],
//       and: [Function: and],
//       gt: [Function (anonymous)],
//       gte: [Function (anonymous)],
//       lt: [Function (anonymous)],
//       lte: [Function (anonymous)],
//       ne: [Function (anonymous)],
//       in: [Function (anonymous)],
//       nin: [Function (anonymous)],
//       all: [Function (anonymous)],
//       regex: [Function (anonymous)],
//       size: [Function (anonymous)],
//       maxDistance: [Function (anonymous)],
//       minDistance: [Function (anonymous)],
//       mod: [Function (anonymous)],
//       exists: [Function (anonymous)],
//       elemMatch: [Function (anonymous)],
//       within: [Function: within],
//       box: [Function (anonymous)],
//       polygon: [Function (anonymous)],
//       circle: [Function (anonymous)],
//       near: [Function: near],
//       intersects: [Function: intersects],
//       geometry: [Function: geometry],
//       select: [Function: select],
//       slice: [Function (anonymous)],
//       sort: [Function (anonymous)],
//       limit: [Function (anonymous)],
//       skip: [Function (anonymous)],
//       batchSize: [Function (anonymous)],
//       comment: [Function (anonymous)],
//       maxTimeMS: [Function (anonymous)],
//       maxTime: [Function (anonymous)],
//       hint: [Function (anonymous)],
//       j: [Function: j],
//       slaveOk: [Function (anonymous)],
//       setReadPreference: [Function (anonymous)],
//       read: [Function (anonymous)],
//       r: [Function (anonymous)],
//       readConcern: [Function (anonymous)],
//       tailable: [Function (anonymous)],
//       w: [Function: writeConcern],
//       writeConcern: [Function: writeConcern],
//       wTimeout: [Function: wtimeout],
//       wtimeout: [Function: wtimeout],
//       merge: [Function (anonymous)],
//       find: [Function (anonymous)],
//       _find: [AsyncFunction: _find],
//       cursor: [Function (anonymous)],
//       findOne: [Function (anonymous)],
//       _findOne: [AsyncFunction: _findOne],
//       count: [Function (anonymous)],
//       _count: [AsyncFunction: _count],
//       distinct: [Function (anonymous)],
//       _distinct: [AsyncFunction: _distinct],
//       updateMany: [Function: updateMany],
//       _updateMany: [AsyncFunction (anonymous)],
//       updateOne: [Function: updateOne],
//       _updateOne: [AsyncFunction (anonymous)],
//       replaceOne: [Function: replaceOne],
//       _replaceOne: [AsyncFunction (anonymous)],
//       deleteOne: [Function (anonymous)],
//       _deleteOne: [AsyncFunction (anonymous)],
//       deleteMany: [Function (anonymous)],
//       _deleteMany: [AsyncFunction (anonymous)],
//       findOneAndUpdate: [Function (anonymous)],
//       _findOneAndUpdate: [AsyncFunction (anonymous)],
//       findOneAndDelete: [Function (anonymous)],
//       findOneAndRemove: [Function (anonymous)],
//       _findOneAndRemove: [AsyncFunction (anonymous)],
//       setTraceFunction: [Function (anonymous)],
//       exec: [AsyncFunction: exec],
//       then: [AsyncFunction (anonymous)],
//       selected: [Function: selected],
//       selectedInclusively: [Function: selectedInclusively],
//       selectedExclusively: [Function: selectedExclusively],
//       _mergeUpdate: [Function (anonymous)],
//       _optionsForExec: [Function (anonymous)],
//       _fieldsForExec: [Function (anonymous)],
//       _updateForExec: [Function (anonymous)],
//       _ensurePath: [Function (anonymous)],
//       _validate: [Function (anonymous)]
//     },
//     'use$geoWithin': true
//   },
//   Model: Model { undefined },
//   Document: [Function: Document] {
//     _events: undefined,
//     _eventsCount: 0,
//     _maxListeners: undefined,
//     setMaxListeners: [Function: setMaxListeners],
//     getMaxListeners: [Function: getMaxListeners],
//     emit: [Function: emit],
//     addListener: [Function: addListener],
//     on: [Function: addListener],
//     prependListener: [Function: prependListener],
//     once: [Function: once],
//     prependOnceListener: [Function: prependOnceListener],
//     removeListener: [Function: removeListener],
//     off: [Function: removeListener],
//     removeAllListeners: [Function: removeAllListeners],
//     listeners: [Function: listeners],
//     rawListeners: [Function: rawListeners],
//     listenerCount: [Function: listenerCount],
//     eventNames: [Function: eventNames],
//     ValidationError: [class ValidationError extends MongooseError]
//   },
//   ObjectId: [Function: SchemaObjectId] {
//     schemaName: 'ObjectId',
//     defaultOptions: {},
//     get: [Function (anonymous)],
//     set: [Function: set],
//     setters: [],
//     _checkRequired: [Function (anonymous)],
//     _cast: [Function: castObjectId],
//     cast: [Function: cast],
//     _defaultCaster: [Function (anonymous)],
//     checkRequired: [Function (anonymous)]
//   },
//   isValidObjectId: [Function (anonymous)],
//   isObjectIdOrHexString: [Function (anonymous)],
//   syncIndexes: [Function (anonymous)],
//   Decimal128: [Function: SchemaDecimal128] {
//     schemaName: 'Decimal128',
//     defaultOptions: {},
//     _cast: [Function: castDecimal128],
//     set: [Function: set],
//     setters: [],
//     get: [Function (anonymous)],
//     cast: [Function: cast],
//     _defaultCaster: [Function (anonymous)],
//     _checkRequired: [Function (anonymous)],
//     checkRequired: [Function (anonymous)]
//   },
//   Mixed: [Function: SchemaMixed] {
//     schemaName: 'Mixed',
//     defaultOptions: {},
//     get: [Function (anonymous)],
//     set: [Function: set],
//     setters: []
//   },
//   Date: [Function: SchemaDate] {
//     schemaName: 'Date',
//     defaultOptions: {},
//     _cast: [Function: castDate],
//     set: [Function: set],
//     setters: [],
//     get: [Function (anonymous)],
//     cast: [Function: cast],
//     _defaultCaster: [Function (anonymous)],
//     _checkRequired: [Function (anonymous)],
//     checkRequired: [Function (anonymous)]
//   },
//   Number: [Function: SchemaNumber] {
//     get: [Function (anonymous)],
//     set: [Function: set],
//     setters: [],
//     _cast: [Function: castNumber],
//     cast: [Function: cast],
//     _defaultCaster: [Function (anonymous)],
//     schemaName: 'Number',
//     defaultOptions: {},
//     _checkRequired: [Function (anonymous)],
//     checkRequired: [Function (anonymous)]
//   },
//   Error: [class MongooseError extends Error] {
//     messages: {
//       DocumentNotFoundError: null,
//       general: [Object],
//       Number: [Object],
//       Date: [Object],
//       String: [Object]
//     },
//     Messages: {
//       DocumentNotFoundError: null,
//       general: [Object],
//       Number: [Object],
//       Date: [Object],
//       String: [Object]
//     },
//     DocumentNotFoundError: [class DocumentNotFoundError extends MongooseError],
//     CastError: [class CastError extends MongooseError],
//     ValidationError: [class ValidationError extends MongooseError],
//     ValidatorError: [class ValidatorError extends MongooseError],
//     VersionError: [class VersionError extends MongooseError],
//     ParallelSaveError: [class ParallelSaveError extends MongooseError],
//     OverwriteModelError: [class OverwriteModelError extends MongooseError],
//     MissingSchemaError: [class MissingSchemaError extends MongooseError],
//     MongooseServerSelectionError: [class MongooseServerSelectionError extends MongooseError],
//     DivergentArrayError: [class DivergentArrayError extends MongooseError],
//     StrictModeError: [class StrictModeError extends MongooseError],
//     StrictPopulateError: [class StrictPopulateError extends MongooseError]
//   },
//   MongooseError: [class MongooseError extends Error] {
//     messages: {
//       DocumentNotFoundError: null,
//       general: [Object],
//       Number: [Object],
//       Date: [Object],
//       String: [Object]
//     },
//     Messages: {
//       DocumentNotFoundError: null,
//       general: [Object],
//       Number: [Object],
//       Date: [Object],
//       String: [Object]
//     },
//     DocumentNotFoundError: [class DocumentNotFoundError extends MongooseError],
//     CastError: [class CastError extends MongooseError],
//     ValidationError: [class ValidationError extends MongooseError],
//     ValidatorError: [class ValidatorError extends MongooseError],
//     VersionError: [class VersionError extends MongooseError],
//     ParallelSaveError: [class ParallelSaveError extends MongooseError],
//     OverwriteModelError: [class OverwriteModelError extends MongooseError],
//     MissingSchemaError: [class MissingSchemaError extends MongooseError],
//     MongooseServerSelectionError: [class MongooseServerSelectionError extends MongooseError],
//     DivergentArrayError: [class DivergentArrayError extends MongooseError],
//     StrictModeError: [class StrictModeError extends MongooseError],
//     StrictPopulateError: [class StrictPopulateError extends MongooseError]
//   },
//   now: [Function: now],
//   CastError: [class CastError extends MongooseError],
//   SchemaTypeOptions: [class SchemaTypeOptions],
//   mongo: {
//     BSON: [Getter],
//     Binary: [Getter],
//     BSONRegExp: [Getter],
//     BSONSymbol: [Getter],
//     BSONType: [Getter],
//     Code: [Getter],
//     DBRef: [Getter],
//     Decimal128: [Getter],
//     Double: [Getter],
//     Int32: [Getter],
//     Long: [Getter],
//     MaxKey: [Getter],
//     MinKey: [Getter],
//     ObjectId: [Getter],
//     Timestamp: [Getter],
//     UUID: [Getter],
//     MongoBulkWriteError: [Getter],
//     ClientEncryption: [Getter],
//     ChangeStreamCursor: [Getter],
//     MongoAPIError: [Getter],
//     MongoAWSError: [Getter],
//     MongoAzureError: [Getter],
//     MongoBatchReExecutionError: [Getter],
//     MongoChangeStreamError: [Getter],
//     MongoCompatibilityError: [Getter],
//     MongoCursorExhaustedError: [Getter],
//     MongoCursorInUseError: [Getter],
//     MongoDecompressionError: [Getter],
//     MongoDriverError: [Getter],
//     MongoError: [Getter],
//     MongoExpiredSessionError: [Getter],
//     MongoGridFSChunkError: [Getter],
//     MongoGridFSStreamError: [Getter],
//     MongoInvalidArgumentError: [Getter],
//     MongoKerberosError: [Getter],
//     MongoMissingCredentialsError: [Getter],
//     MongoMissingDependencyError: [Getter],
//     MongoNetworkError: [Getter],
//     MongoNetworkTimeoutError: [Getter],
//     MongoNotConnectedError: [Getter],
//     MongoParseError: [Getter],
//     MongoRuntimeError: [Getter],
//     MongoServerClosedError: [Getter],
//     MongoServerError: [Getter],
//     MongoServerSelectionError: [Getter],
//     MongoSystemError: [Getter],
//     MongoTailableCursorError: [Getter],
//     MongoTopologyClosedError: [Getter],
//     MongoTransactionError: [Getter],
//     MongoUnexpectedServerResponseError: [Getter],
//     MongoWriteConcernError: [Getter],
//     AbstractCursor: [Getter],
//     Admin: [Getter],
//     AggregationCursor: [Getter],
//     CancellationToken: [Getter],
//     ChangeStream: [Getter],
//     ClientSession: [Getter],
//     Collection: [Getter],
//     Db: [Getter],
//     FindCursor: [Getter],
//     GridFSBucket: [Getter],
//     GridFSBucketReadStream: [Getter],
//     GridFSBucketWriteStream: [Getter],
//     ListCollectionsCursor: [Getter],
//     ListIndexesCursor: [Getter],
//     MongoClient: [Getter],
//     OrderedBulkOperation: [Getter],
//     UnorderedBulkOperation: [Getter],
//     BatchType: [Getter],
//     AutoEncryptionLoggerLevel: [Getter],
//     GSSAPICanonicalizationValue: [Getter],
//     AuthMechanism: [Getter],
//     Compressor: [Getter],
//     CURSOR_FLAGS: [Getter],
//     MongoErrorLabel: [Getter],
//     ExplainVerbosity: [Getter],
//     ServerApiVersion: [Getter],
//     ReturnDocument: [Getter],
//     ProfilingLevel: [Getter],
//     ReadConcernLevel: [Getter],
//     ReadPreferenceMode: [Getter],
//     ServerType: [Getter],
//     TopologyType: [Getter],
//     ReadConcern: [Getter],
//     ReadPreference: [Getter],
//     WriteConcern: [Getter],
//     CommandFailedEvent: [Getter],
//     CommandStartedEvent: [Getter],
//     CommandSucceededEvent: [Getter],
//     ConnectionCheckedInEvent: [Getter],
//     ConnectionCheckedOutEvent: [Getter],
//     ConnectionCheckOutFailedEvent: [Getter],
//     ConnectionCheckOutStartedEvent: [Getter],
//     ConnectionClosedEvent: [Getter],
//     ConnectionCreatedEvent: [Getter],
//     ConnectionPoolClearedEvent: [Getter],
//     ConnectionPoolClosedEvent: [Getter],
//     ConnectionPoolCreatedEvent: [Getter],
//     ConnectionPoolMonitoringEvent: [Getter],
//     ConnectionPoolReadyEvent: [Getter],
//     ConnectionReadyEvent: [Getter],
//     ServerClosedEvent: [Getter],
//     ServerDescriptionChangedEvent: [Getter],
//     ServerHeartbeatFailedEvent: [Getter],
//     ServerHeartbeatStartedEvent: [Getter],
//     ServerHeartbeatSucceededEvent: [Getter],
//     ServerOpeningEvent: [Getter],
//     TopologyClosedEvent: [Getter],
//     TopologyDescriptionChangedEvent: [Getter],
//     TopologyOpeningEvent: [Getter],
//     SrvPollingEvent: [Getter],
//     MongoCryptAzureKMSRequestError: [Getter],
//     MongoCryptCreateDataKeyError: [Getter],
//     MongoCryptCreateEncryptedCollectionError: [Getter],
//     MongoCryptError: [Getter],
//     MongoCryptInvalidArgumentError: [Getter],
//     MongoCryptKMSRequestNetworkTimeoutError: [Getter]
//   },
//   mquery: [Function: Query] {
//     permissions: {
//       distinct: [Function],
//       findOneAndRemove: [Function],
//       findOneAndUpdate: [Function],
//       count: [Function]
//     },
//     _isPermitted: [Function (anonymous)],
//     canMerge: [Function (anonymous)],
//     setGlobalTraceFunction: [Function (anonymous)],
//     utils: {
//       clone: [Function: clone],
//       cloneObject: [Function: cloneObject],
//       cloneArray: [Function: cloneArray],
//       merge: [Function: merge],
//       mergeClone: [Function: mergeClone],
//       readPref: [Function: readPref],
//       readConcern: [Function: readConcern],
//       toString: [Function (anonymous)],
//       isObject: [Function (anonymous)],
//       keys: [Function: keys],
//       create: [Function: create],
//       inherits: [Function (anonymous)],
//       isArgumentsObject: [Function (anonymous)]
//     },
//     env: { isNode: [Array], isMongo: false, isBrowser: false, type: 'node' },
//     Collection: [class NodeCollection extends Collection],
//     BaseCollection: [Function: Collection] { methods: [Array] }
//   },
//   sanitizeFilter: [Function: sanitizeFilter],
//   trusted: [Function: trusted],
//   skipMiddlewareFunction: [Function: skipWrappedFunction],
//   overwriteMiddlewareResult: [Function: overwriteResult]
// }

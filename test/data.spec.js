describe('data', () => {

  it('debería exponer función computeUsersStats en objeto global', () => {
  assert.isFunction(computeUsersStats);
  });
 
  it('debería exponer función sortUsers en objeto global', () => {
  assert.isFunction(sortUsers);
  });
 
  it('debería exponer función filterUsers en objeto global', () => {
  assert.isFunction(filterUsers);
  });
 
  it('debería exponer función processCohortData en objeto global', () => {
  assert.isFunction(processCohortData);
  });
 
  describe('computeUsersStats(users, progress, courses)', () => {
 
  const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
  const courses = Object.keys(cohort.coursesIndex);
  const { users, progress } = fixtures;
 
  it('debería retornar arreglo de usuarios con propiedad stats', () => {
  const processed = computeUsersStats(users, progress, courses);
 
  assert.equal(users.length, processed.length);
 
  processed.forEach(user => {
  assert.ok(user.hasOwnProperty('stats'));
  assert.isNumber(user.stats.percent);
  assert.isObject(user.stats.exercises);
  assert.isObject(user.stats.quizzes);
  assert.isObject(user.stats.reads);
  });
  });
 
  describe('user.stats para el primer usuario en data de prueba - ver carpeta data/', () => {
 
  const processed = computeUsersStats(users, progress, courses);
 
  it(
  'debería tener propiedad percent con valor 53',
  () => assert.equal(processed[0].stats.percent, 53)
  );
 
  it('debería tener propiedad exercises con valor {total: 2, completed: 0, percent: 0}', () => {
  assert.deepEqual(processed[0].stats.exercises, {
  total: 2,
  completed: 0,
  percent: 0,
  });
  });
 
  it('debería tener propiedad quizzes con valor {total: 3, completed: 2, percent: 67, scoreSum: 57, scoreAvg: 29}', () => {
  assert.deepEqual(processed[0].stats.quizzes, {
  total: 3,
  completed: 2,
  percent: 67,
  scoreSum: 57,
  scoreAvg: 29,
  });
  });
 
  it('debería tener propiedad reads con valor {total: 11, completed: 6, percent: 55}', () => {
  assert.deepEqual(processed[0].stats.reads, {
  total: 11,
  completed: 6,
  percent: 55,
  });
  });
 
  });
 
  });
 
  describe('sortUsers(users, orderBy, orderDirection)', () => {
 
  const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
  const courses = Object.keys(cohort.coursesIndex);
  const { users, progress } = fixtures;
  const processed = computeUsersStats(users, progress, courses);
 
  it('debería retornar arreglo de usuarios ordenado por nombre ASC', () => {
  
  const orderBy = 'name';
  const orderDirection ='ASC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].name, 'Adriana Vizcarra PaitáN');
  });
  it('debería retornar arreglo de usuarios ordenado por nombre DESC', ()=>{
  
  const orderBy = 'name';
  const orderDirection ='DESC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].name, 'Zurisadai Rosas Aramburú');
  });
  it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC', ()=>{
  
  const orderBy = 'percent';
  const orderDirection ='ASC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].stats.percent, 0);
  });
  it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC', ()=>{
  const orderBy = 'percent';
  const orderDirection ='DESC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].stats.percent, 100);
  });
  it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC',()=>{
  const orderBy = 'exercises completed';
  const orderDirection ='ASC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].stats.exercises.completed, 0);
  });
  it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC',()=>{
  const orderBy = 'exercises completed';
  const orderDirection ='DESC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].stats.exercises.completed, 2);
  });
  it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC',()=>{
  const orderBy = 'quizzes completed';
  const orderDirection ='ASC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].stats.quizzes.completed, 0);
  });
  it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC',()=>{
  const orderBy = 'quizzes completed';
  const orderDirection ='DESC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].stats.quizzes.completed, 3);
  });
  it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC',()=>{
  const orderBy = 'quizzes scoreAvg';
  const orderDirection ='ASC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].stats.quizzes.scoreAvg, 0); 
  });
  it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC',()=>{
  const orderBy = 'quizzes scoreAvg';
  const orderDirection ='DESC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].stats.quizzes.scoreAvg, 100); 
  });
  it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC', ()=>{
  const orderBy = 'reads completed';
  const orderDirection ='ASC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].stats.reads.completed, 0); 
  });
  it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC',()=>{
  const orderBy = 'reads completed';
  const orderDirection ='DESC';
  const sortedUsers = sortUsers(processed, orderBy, orderDirection);
 
  assert.equal(sortedUsers[0].stats.reads.completed, 11); 
  });
 
  });
 
  describe('filterUsers(users, search)', () => {
    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;
    const processed = computeUsersStats(users, progress, courses);

  it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)',()=>{
    const search = 'viky';
    //const orderBy = 'name';
    //const orderDirection ='ASC';
    //const sortedUsers = sortUsers(processed, orderBy, orderDirection);

    const filteredUsers = filterUsers(processed, search);

    assert.equal(filteredUsers[0].name, 'Viky Rocsana Chocce'); 

  });
  it('deberia retornar el mismo arreglo si el input es igual a vacio ',()=>{
    const search = '';
    //const orderBy = 'name';
    //const orderDirection ='ASC';
    //const sortedUsers = sortUsers(processed, orderBy, orderDirection);

    const filteredUsers = filterUsers(processed, search);

    assert.equal(filteredUsers[0].name, 'Lizeth'); 
  })
 
  });
 
  describe('processCohortData({ cohortData, orderBy, orderDirection, filterBy })', () => {
    const cohort = fixtures.cohorts.find(item => item.id === 'lim-2018-03-pre-core-pw');
    const courses = Object.keys(cohort.coursesIndex);
    const { users, progress } = fixtures;

 
  it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter',()=>{
    const orderBy = 'reads completed';
    const orderDirection ='ASC';
    const search = 'angelica'

    const options = {
      cohort: cohort,
      cohortData: {
          users: users,
          progress: progress
      },
      orderBy: orderBy,
      orderDirection: orderDirection,
      search: search
  };
    const processedCohortData = processCohortData(options);
    assert.equal(processedCohortData[0].name, 'Angelica Maria Huarcaya Limachi');
    assert.equal(processedCohortData[1].name, 'Angelica Maria Quezada Gonzales');
    assert.equal(processedCohortData.length, 2);
  });
 
  });
 
 });
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
      assert.equal(users.filter(u => u.role === 'student').length, processed.length);

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

    it('debería retornar arreglo de usuarios ordenado por nombre ASC',() => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'name', 'asc');
      assert.deepEqual('adriana vizcarra paitán', processed[0].name);
    });
    it('debería retornar arreglo de usuarios ordenado por nombre DESC',() => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'name', 'desc');
      assert.deepEqual('adriana vizcarra paitán', processed[0].name);
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general ASC',() => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'total', 'asc');
      assert.deepEqual('0', processed[0].stats.percent);
    });
    it('debería retornar arreglo de usuarios ordenado por porcentaje general DESC',() => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'total', 'desc');
      assert.deepEqual('100', processed[0].stats.percent);
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados ASC', () => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'exercise', 'asc');
      assert.deepEqual('0', processed[0].stats.exercises.completed);
    });
    it('debería retornar arreglo de usuarios ordenado por ejercicios completados DESC', () => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'exercise', 'desc');
      assert.deepEqual('2', processed[0].stats.exercises.completed);
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados ASC',() => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'quizzes', 'asc');
      assert.deepEqual('0', processed[0].stats.quizzes.completed);
    });
    it('debería retornar arreglo de usuarios ordenado por quizzes completados DESC',() => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'quizzes', 'desc');
      assert.deepEqual('3', processed[0].stats.quizzes.completed);
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados ASC',() => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'quizpoints', 'asc');
      assert.deepEqual('0', processed[0].stats.quizzes.scoreAvg);
    });
    it('debería retornar arreglo de usuarios ordenado por score promedio en quizzes completados DESC',() => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'quizpoints', 'desc');
      assert.deepEqual('100', processed[0].stats.quizzes.scoreAvg);
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas ASC',() => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'reads', 'asc');
      assert.deepEqual('0', processed[0].stats.reads.completed);
    });
    it('debería retornar arreglo de usuarios ordenado por lecturas (reads) completadas DESC'),() => {
      const users = fixtures.users;
      const processed = sortUsers(users, 'reads', 'desc');
      assert.deepEqual('11', processed[0].stats.reads.completed);
    };

  });

  describe('filterUsers(users, filterBy)', () => {

    it('debería retornar nuevo arreglo solo con usuarios con nombres que contengan string (case insensitive)');
      const users = fixtures.users;
      const processed = sortUsers(users, 'Zurisadai Rosas Aramburú');
      assert.deepEqual('Zurisadai Rosas Aramburú', processed[0].name);
  });

  describe('processCohortData({ cohortData, orderBy, orderDirection, filterBy })', () => {
      const { users, progress } = fixtures;
      let option = {
        cohortData: {
          users: users,
          progress: progress
          },
        orderBy: 'name',
        orderDirection: 'ASC',
        search: 'Mary Katty'
      };
      let data = processCohortData(options);

    it('debería retornar arreglo de usuarios con propiedad stats y aplicar sort y filter',() => {
      assert.deepEqual(data[0].name, 'Mary Katty Vicuña Ore');
    });

  });

});

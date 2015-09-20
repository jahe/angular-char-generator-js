angular.module('charGenerator', [])
    .controller('CharGeneratorController', function() {
        var generator = this;

        generator.head = {
            pics: ['img/head.gif', 'img/head2.gif'],
            active: 0
        };

        generator.body = {
            pics: ['img/body.gif', 'img/body2.gif'],
            active: 0
        };

        generator.legs = {
            pics: ['img/legs.gif', 'img/legs2.gif'],
            active: 0
        };

        generator.next = function(bodyPart) {
            if (generator[bodyPart].pics.length > generator[bodyPart].active + 1)
                generator[bodyPart].active++;
            else
                generator[bodyPart].active = 0;
        };

        generator.prev = function(bodyPart) {
            if (generator[bodyPart].active > 0)
                generator[bodyPart].active--;
            else
                generator[bodyPart].active = generator[bodyPart].pics.length - 1;
        };
    });

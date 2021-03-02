// (C) Copyright 2015 Moodle Pty Ltd.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import { Component, OnInit, ViewChild } from '@angular/core';

import { CoreCourseWSModule } from '@features/course/services/course';
import { CoreNavigator } from '@services/navigator';
import { AddonModQuizIndexComponent } from '../../components/index';
import { AddonModQuizQuizWSData } from '../../services/quiz';

/**
 * Page that displays the quiz entry page.
 */
@Component({
    selector: 'page-addon-mod-quiz-index',
    templateUrl: 'index.html',
})
export class AddonModQuizIndexPage implements OnInit {

    @ViewChild(AddonModQuizIndexComponent) quizComponent?: AddonModQuizIndexComponent;

    title?: string;
    module?: CoreCourseWSModule;
    courseId?: number;

    /**
     * Component being initialized.
     */
    ngOnInit(): void {
        this.module = CoreNavigator.getRouteParam('module');
        this.courseId = CoreNavigator.getRouteNumberParam('courseId');
        this.title = this.module?.name;
    }

    /**
     * Update some data based on the quiz instance.
     *
     * @param quiz Quiz instance.
     */
    updateData(quiz: AddonModQuizQuizWSData): void {
        this.title = quiz.name || this.title;
    }

    /**
     * User entered the page.
     */
    ionViewDidEnter(): void {
        this.quizComponent?.ionViewDidEnter();
    }

    /**
     * User left the page.
     */
    ionViewDidLeave(): void {
        this.quizComponent?.ionViewDidLeave();
    }

}

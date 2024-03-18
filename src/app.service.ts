/**
 * This file is part of SQD Nest Skeleton.
 *
 * (c) SQD Inc. <dev@sqd.com>.
 *
 * This source file is subject to a proprietary license that is bundled
 * with this source code in the file LICENSE.
 */
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
